import { View, Text, ScrollView, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { CheckCircle } from "lucide-react-native";
import { CHALLENGES } from "../types";

export default function SuccessPage() {
  const { challenge: challengeId } = useLocalSearchParams<{ challenge?: string }>();
  const selectedChallenge = CHALLENGES.find((c) => c.id === challengeId);

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
          <Link href="/submit" asChild>
            <Pressable>
              <Text className="text-indigo-400">Apply</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Success Content */}
      <View className="flex-1 items-center justify-center px-6 py-20">
        <View className="bg-green-900/30 p-6 rounded-full mb-6">
          <CheckCircle size={64} color="#22c55e" />
        </View>

        <Text className="text-white text-3xl font-bold mb-4">VIBE SUBMITTED</Text>

        <Text className="text-slate-400 text-center mb-2">
          We've received your submission for:
        </Text>
        {selectedChallenge && (
          <View className="flex-row items-center gap-2 mb-8">
            <Text className="text-xl">
              {selectedChallenge.businessName.includes("Bakery") ? "🍞" : "🏕️"}
            </Text>
            <Text className="text-indigo-400 font-semibold">
              {selectedChallenge.businessName} — {selectedChallenge.title}
            </Text>
          </View>
        )}

        {/* What Happens Next */}
        <View className="bg-slate-800 p-6 rounded-2xl w-full max-w-md mb-8">
          <Text className="text-white font-bold text-lg mb-4">
            WHAT HAPPENS NEXT
          </Text>

          <View className="gap-3">
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold">1.</Text>
              <Text className="text-slate-300 flex-1">
                We review your chat history / Loom
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold">2.</Text>
              <Text className="text-slate-300 flex-1">
                We watch your walkthrough and assess your thinking
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold">3.</Text>
              <Text className="text-slate-300 flex-1">
                You'll hear back within 5 days
              </Text>
            </View>
          </View>

          <View className="mt-4 pt-4 border-t border-slate-700">
            <Text className="text-slate-400 text-sm">
              Every compelling submission gets personalized feedback.
            </Text>
          </View>
        </View>

        {/* CTA */}
        <Link href="/challenges" asChild>
          <Pressable className="bg-slate-800 px-6 py-3 rounded-xl">
            <Text className="text-indigo-400 font-semibold">
              Submit Another Challenge
            </Text>
          </Pressable>
        </Link>
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
