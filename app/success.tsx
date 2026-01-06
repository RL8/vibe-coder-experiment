import { View, Text, ScrollView, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { CheckCircle, Users } from "lucide-react-native";
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
          <Link href="/submit" asChild>
            <Pressable>
              <Text className="text-indigo-400">Join</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Success Content */}
      <View className="flex-1 items-center justify-center px-6 py-20">
        <View className="bg-green-900/30 p-6 rounded-full mb-6">
          <CheckCircle size={64} color="#22c55e" />
        </View>

        <Text className="text-white text-3xl font-bold mb-4">YOU'RE IN THE QUEUE</Text>

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
                We watch your Loom and see how you think
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold">2.</Text>
              <Text className="text-slate-300 flex-1">
                We send you feedback (everyone gets feedback)
              </Text>
            </View>
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold">3.</Text>
              <Text className="text-slate-300 flex-1">
                If you're a fit, you're in the collective
              </Text>
            </View>
          </View>

          <View className="mt-4 pt-4 border-t border-slate-700 flex-row items-center gap-2">
            <Users size={16} color="#64748b" />
            <Text className="text-slate-400 text-sm">
              Expect to hear back within a few days
            </Text>
          </View>
        </View>

        {/* CTA */}
        <Link href="/challenges" asChild>
          <Pressable className="bg-slate-800 px-6 py-3 rounded-xl">
            <Text className="text-indigo-400 font-semibold">
              Try Another Challenge
            </Text>
          </Pressable>
        </Link>
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
