import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { Link, useLocalSearchParams, router } from "expo-router";
import { Info } from "lucide-react-native";
import { CHALLENGES } from "../types";
import { supabase } from "../lib/supabase";

export default function SubmitPage() {
  const { challenge: challengeId } = useLocalSearchParams<{
    challenge?: string;
  }>();
  const selectedChallenge = CHALLENGES.find((c) => c.id === challengeId);

  const [form, setForm] = useState({
    name: "",
    email: "",
    evidenceUrl: "", // Single field: Loom, chat link, CodePen, anything
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Minimal validation - just need name, email, and EITHER a link OR description
    if (!form.name || !form.email) {
      setError("Please enter your name and email");
      return;
    }

    if (!form.evidenceUrl && !form.description) {
      setError("Please share a link to your work OR describe your approach");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: submitError } = await supabase
        .from("submissions")
        .insert({
          name: form.name,
          email: form.email,
          challenge_id: selectedChallenge?.id || "general",
          evidence_url: form.evidenceUrl || null,
          description: form.description || null,
          status: "pending",
        });

      if (submitError) throw submitError;

      router.replace(
        `/success${selectedChallenge ? `?challenge=${selectedChallenge.id}` : ""}`
      );
    } catch (err: any) {
      setError(err.message || "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-slate-800">
        <Link href="/" asChild>
          <Pressable>
            <Text className="text-white font-bold text-lg">
              VIBE CODING COLLECTIVE
            </Text>
          </Pressable>
        </Link>
        <View className="flex-row gap-4">
          <Link href="/challenges" asChild>
            <Pressable>
              <Text className="text-slate-400">Challenges</Text>
            </Pressable>
          </Link>
          <Text className="text-white font-semibold">Join</Text>
        </View>
      </View>

      {/* Title */}
      <View className="px-6 py-8">
        <Text className="text-white text-3xl font-bold mb-2">
          JOIN THE COLLECTIVE
        </Text>
        <Text className="text-slate-400">
          Show us you can think through a problem with AI. That's it.
        </Text>
      </View>

      {/* What We're Looking For - Info Box */}
      <View className="mx-6 mb-6 bg-indigo-900/30 border border-indigo-800 p-4 rounded-xl">
        <View className="flex-row items-center gap-2 mb-2">
          <Info size={18} color="#818cf8" />
          <Text className="text-indigo-300 font-semibold">
            What we're looking for
          </Text>
        </View>
        <Text className="text-indigo-200/80 text-sm">
          We want to see how you think, not a polished product. Share a Loom
          walkthrough, a chat history, a rough prototype — anything that shows
          your problem-solving process.
        </Text>
      </View>

      {/* Selected Challenge (Optional) */}
      <View className="mx-6 mb-6 bg-slate-800 p-4 rounded-xl">
        {selectedChallenge ? (
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <Text className="text-xl">
                {selectedChallenge.businessName.includes("Bakery") ? "🍞" : "🏕️"}
              </Text>
              <View>
                <Text className="text-slate-400 text-sm">Challenge</Text>
                <Text className="text-white font-semibold">
                  {selectedChallenge.title}
                </Text>
              </View>
            </View>
            <Link href="/challenges" asChild>
              <Pressable>
                <Text className="text-indigo-400">Change</Text>
              </Pressable>
            </Link>
          </View>
        ) : (
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-slate-400 text-sm">Challenge (optional)</Text>
              <Text className="text-slate-300">
                No specific challenge selected
              </Text>
            </View>
            <Link href="/challenges" asChild>
              <Pressable>
                <Text className="text-indigo-400">Browse →</Text>
              </Pressable>
            </Link>
          </View>
        )}
      </View>

      {/* Simple Form */}
      <View className="mx-6 mb-6 bg-slate-800/50 p-6 rounded-2xl">
        {/* Name & Email */}
        <Text className="text-slate-300 mb-2">Name</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-4"
          placeholder="What should we call you?"
          placeholderTextColor="#64748b"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <Text className="text-slate-300 mb-2">Email</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-6"
          placeholder="your@email.com"
          placeholderTextColor="#64748b"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />

        {/* Evidence - Single Field */}
        <Text className="text-white font-semibold text-lg mb-3">
          Show your work
        </Text>

        <Text className="text-slate-300 mb-2">Link to your work</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-1"
          placeholder="Loom, Gemini chat, CodePen, Google Doc..."
          placeholderTextColor="#64748b"
          autoCapitalize="none"
          value={form.evidenceUrl}
          onChangeText={(text) => setForm({ ...form, evidenceUrl: text })}
        />
        <Text className="text-slate-500 text-sm mb-4">
          Any link that shows how you approached a problem with AI
        </Text>

        <View className="flex-row items-center my-4">
          <View className="flex-1 h-px bg-slate-700" />
          <Text className="text-slate-500 mx-4">and/or</Text>
          <View className="flex-1 h-px bg-slate-700" />
        </View>

        <Text className="text-slate-300 mb-2">Tell us about it</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl h-28"
          placeholder="What problem did you try to solve? How did you approach it? What did you learn?"
          placeholderTextColor="#64748b"
          multiline
          textAlignVertical="top"
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
        />
        <Text className="text-slate-500 text-sm mt-1">
          If you don't have a link, just describe your experience
        </Text>
      </View>

      {/* Error */}
      {error ? (
        <View className="mx-6 mb-4 bg-red-900/50 p-4 rounded-xl">
          <Text className="text-red-300">{error}</Text>
        </View>
      ) : null}

      {/* Submit Button */}
      <View className="px-6 py-6 items-center">
        <Pressable
          className={`px-8 py-4 rounded-2xl w-full items-center ${
            isSubmitting ? "bg-slate-600" : "bg-indigo-600"
          }`}
          onPress={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="text-white font-semibold text-lg">
              JOIN THE COLLECTIVE →
            </Text>
          )}
        </Pressable>
        <Text className="text-slate-500 text-sm mt-3 text-center">
          Everyone gets a response. No ghosting.
        </Text>
      </View>

      {/* Footer */}
      <View className="px-6 py-8 border-t border-slate-800">
        <Text className="text-slate-500 text-center text-sm">
          Vibe Coding Collective © 2025
        </Text>
      </View>
    </ScrollView>
  );
}
