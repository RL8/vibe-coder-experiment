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
import { CHALLENGES } from "../types";
import { supabase } from "../lib/supabase";

export default function SubmitPage() {
  const { challenge: challengeId } = useLocalSearchParams<{ challenge?: string }>();
  const selectedChallenge = CHALLENGES.find((c) => c.id === challengeId);

  const [form, setForm] = useState({
    name: "",
    email: "",
    chatHistoryUrl: "",
    artifactUrl: "",
    videoUrl: "",
    logicDescription: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    // Validation
    if (!form.name || !form.email || !form.videoUrl || !form.logicDescription) {
      setError("Please fill in all required fields");
      return;
    }

    if (!selectedChallenge) {
      setError("Please select a challenge first");
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
          challenge_id: selectedChallenge.id,
          chat_history_url: form.chatHistoryUrl || null,
          artifact_url: form.artifactUrl || null,
          video_url: form.videoUrl,
          logic_description: form.logicDescription,
          status: "pending",
        });

      if (submitError) throw submitError;

      router.replace(`/success?challenge=${selectedChallenge.id}`);
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
              THE VIBE CODER EXPERIMENT
            </Text>
          </Pressable>
        </Link>
        <View className="flex-row gap-4">
          <Link href="/challenges" asChild>
            <Pressable>
              <Text className="text-slate-400">Challenges</Text>
            </Pressable>
          </Link>
          <Text className="text-white font-semibold">Apply</Text>
        </View>
      </View>

      {/* Title */}
      <View className="px-6 py-8">
        <Text className="text-white text-3xl font-bold mb-2">
          SUBMIT YOUR VIBE
        </Text>
      </View>

      {/* Selected Challenge */}
      <View className="mx-6 mb-6 bg-slate-800 p-4 rounded-xl flex-row items-center justify-between">
        {selectedChallenge ? (
          <>
            <View className="flex-row items-center gap-3">
              <Text className="text-xl">
                {selectedChallenge.businessName.includes("Bakery") ? "🍞" : "🏕️"}
              </Text>
              <View>
                <Text className="text-slate-400 text-sm">
                  {selectedChallenge.businessName}
                </Text>
                <Text className="text-white font-semibold">
                  {selectedChallenge.title}
                </Text>
              </View>
            </View>
            <Link href="/challenges" asChild>
              <Pressable>
                <Text className="text-indigo-400">Change ↺</Text>
              </Pressable>
            </Link>
          </>
        ) : (
          <Link href="/challenges" asChild>
            <Pressable className="flex-1">
              <Text className="text-slate-400">
                No challenge selected.{" "}
                <Text className="text-indigo-400">Select one →</Text>
              </Text>
            </Pressable>
          </Link>
        )}
      </View>

      {/* About You */}
      <View className="mx-6 mb-6 bg-slate-800/50 p-6 rounded-2xl">
        <Text className="text-white font-bold text-lg mb-4">ABOUT YOU</Text>

        <Text className="text-slate-300 mb-2">Name *</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-4"
          placeholder="Your name"
          placeholderTextColor="#64748b"
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />

        <Text className="text-slate-300 mb-2">Email *</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl"
          placeholder="your@email.com"
          placeholderTextColor="#64748b"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(text) => setForm({ ...form, email: text })}
        />
      </View>

      {/* Proof of Work */}
      <View className="mx-6 mb-6 bg-slate-800/50 p-6 rounded-2xl">
        <Text className="text-white font-bold text-lg mb-4">
          YOUR PROOF OF WORK
        </Text>

        <Text className="text-slate-300 mb-2">Chat History Link</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-1"
          placeholder="https://gemini.google.com/share/... or Claude link"
          placeholderTextColor="#64748b"
          autoCapitalize="none"
          value={form.chatHistoryUrl}
          onChangeText={(text) => setForm({ ...form, chatHistoryUrl: text })}
        />
        <Text className="text-slate-500 text-sm mb-4">
          ℹ️ Share your full conversation so we can see how you iterated
          (optional if covered in Loom)
        </Text>

        <Text className="text-slate-300 mb-2">Output/App Link</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-1"
          placeholder="https://codepen.io/... or Google Drive link"
          placeholderTextColor="#64748b"
          autoCapitalize="none"
          value={form.artifactUrl}
          onChangeText={(text) => setForm({ ...form, artifactUrl: text })}
        />
        <Text className="text-slate-500 text-sm mb-4">
          ℹ️ Link to the functional result (HTML, script, prototype)
        </Text>

        <Text className="text-slate-300 mb-2">Loom Video *</Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl mb-1"
          placeholder="https://loom.com/share/..."
          placeholderTextColor="#64748b"
          autoCapitalize="none"
          value={form.videoUrl}
          onChangeText={(text) => setForm({ ...form, videoUrl: text })}
        />
        <Text className="text-slate-500 text-sm">
          ℹ️ Walk us through your thinking — why those prompts?
        </Text>
      </View>

      {/* Mindset Reflection */}
      <View className="mx-6 mb-6 bg-slate-800/50 p-6 rounded-2xl">
        <Text className="text-white font-bold text-lg mb-4">
          MINDSET REFLECTION
        </Text>

        <Text className="text-slate-300 mb-2">
          Explain your approach. What was your "architecture"? *
        </Text>
        <TextInput
          className="bg-slate-700 text-white p-4 rounded-xl h-32"
          placeholder="Describe how you approached this challenge..."
          placeholderTextColor="#64748b"
          multiline
          textAlignVertical="top"
          value={form.logicDescription}
          onChangeText={(text) => setForm({ ...form, logicDescription: text })}
        />
      </View>

      {/* Error */}
      {error ? (
        <View className="mx-6 mb-4 bg-red-900/50 p-4 rounded-xl">
          <Text className="text-red-300">{error}</Text>
        </View>
      ) : null}

      {/* Submit Button */}
      <View className="px-6 py-8 items-center">
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
              SUBMIT YOUR VIBE →
            </Text>
          )}
        </Pressable>
      </View>

      {/* Footer */}
      <View className="px-6 py-8 border-t border-slate-800">
        <Text className="text-slate-500 text-center text-sm">
          The Vibe Coder Experiment © 2025
        </Text>
      </View>
    </ScrollView>
  );
}
