import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { Brain, Lightbulb, Rocket } from "lucide-react-native";

export default function LandingPage() {
  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-slate-800">
        <Text className="text-white font-bold text-lg">
          THE VIBE CODER EXPERIMENT
        </Text>
        <View className="flex-row gap-4">
          <Link href="/challenges" asChild>
            <Pressable>
              <Text className="text-slate-400 hover:text-white">Challenges</Text>
            </Pressable>
          </Link>
          <Link href="/submit" asChild>
            <Pressable>
              <Text className="text-indigo-400 hover:text-indigo-300">Apply</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Hero */}
      <View className="px-6 py-20 items-center">
        <Text className="text-slate-400 text-lg text-center mb-4">
          "We aren't asking you to build
        </Text>
        <Text className="text-white text-3xl font-bold text-center mb-4">
          the next Facebook.
        </Text>
        <Text className="text-slate-400 text-lg text-center mb-2">
          We're asking you to build a tool that helps
        </Text>
        <Text className="text-slate-400 text-lg text-center mb-2">
          a baker know how many croissants
        </Text>
        <Text className="text-indigo-400 text-lg text-center mb-8">
          to load into a van at 4 AM."
        </Text>

        <Link href="/challenges" asChild>
          <Pressable className="bg-indigo-600 px-8 py-4 rounded-2xl">
            <Text className="text-white font-semibold text-lg">
              View Challenges →
            </Text>
          </Pressable>
        </Link>
      </View>

      {/* What is a Vibe Coder */}
      <View className="px-6 py-12 mx-6 bg-slate-800/50 rounded-3xl mb-12">
        <Text className="text-white text-2xl font-bold mb-4">
          WHAT IS A VIBE CODER?
        </Text>
        <Text className="text-slate-300 text-lg italic mb-4">
          "The vibe coder has little to no interaction with the code and focuses
          more on prompting."
        </Text>
        <Text className="text-slate-400">
          We don't care about your CS degree or LeetCode score.{"\n"}
          We care about how you THINK.
        </Text>
      </View>

      {/* Skills */}
      <View className="px-6 mb-12">
        <View className="flex-row flex-wrap gap-4 justify-center">
          <View className="bg-slate-800 p-6 rounded-2xl w-72">
            <Brain size={32} color="#6366f1" />
            <Text className="text-white font-bold mt-4 mb-2">
              Critical Thinking
            </Text>
            <Text className="text-slate-400">
              Solve problems from angles others miss
            </Text>
          </View>

          <View className="bg-slate-800 p-6 rounded-2xl w-72">
            <Lightbulb size={32} color="#6366f1" />
            <Text className="text-white font-bold mt-4 mb-2">
              User-Centric Mindset
            </Text>
            <Text className="text-slate-400">
              Build for real non-tech users who need it
            </Text>
          </View>

          <View className="bg-slate-800 p-6 rounded-2xl w-72">
            <Rocket size={32} color="#6366f1" />
            <Text className="text-white font-bold mt-4 mb-2">High Agency</Text>
            <Text className="text-slate-400">
              Take a vague need and run with it
            </Text>
          </View>
        </View>
      </View>

      {/* The Experiment */}
      <View className="px-6 py-12">
        <Text className="text-white text-2xl font-bold mb-4">THE EXPERIMENT</Text>
        <Text className="text-slate-400 mb-6">
          This is a test. We believe prompt-first development is the future of
          SME software. You'll work on real clients with a safety net:
        </Text>

        <View className="gap-3 mb-8">
          <Text className="text-slate-300">
            ✓ Professional QA agency audits all code
          </Text>
          <Text className="text-slate-300">
            ✓ Standards you feed into your LLM sessions
          </Text>
          <Text className="text-slate-300">
            ✓ Real "boring businesses" that need real solutions
          </Text>
        </View>

        {/* Engagement Options */}
        <View className="bg-slate-800 p-6 rounded-2xl">
          <Text className="text-white font-bold text-lg mb-4">
            ENGAGEMENT OPTIONS
          </Text>

          <View className="gap-4">
            <View className="flex-row items-start gap-3">
              <Text className="text-2xl">💼</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">PAID CONTRACT</Text>
                <Text className="text-slate-400">
                  $20-40/hr, project-based, path to hire
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <Text className="text-2xl">📚</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">TRAINING</Text>
                <Text className="text-slate-400">
                  Learn on real clients, minimal pay
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <Text className="text-2xl">👁️</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">SPECTATOR</Text>
                <Text className="text-slate-400">
                  Watch our process, learn to run your own
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View className="px-6 py-12 items-center">
        <Link href="/challenges" asChild>
          <Pressable className="bg-indigo-600 px-8 py-4 rounded-2xl">
            <Text className="text-white font-semibold text-lg">
              See The Challenges →
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
