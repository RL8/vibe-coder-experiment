import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { Brain, Lightbulb, Rocket, Users } from "lucide-react-native";

export default function LandingPage() {
  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-slate-800">
        <Text className="text-white font-bold text-lg">
          VIBE CODING COLLECTIVE
        </Text>
        <View className="flex-row gap-4">
          <Link href="/challenges" asChild>
            <Pressable>
              <Text className="text-slate-400 hover:text-white">Challenges</Text>
            </Pressable>
          </Link>
          <Link href="/submit" asChild>
            <Pressable>
              <Text className="text-indigo-400 hover:text-indigo-300">Join</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Hero */}
      <View className="px-6 py-20 items-center">
        <Text className="text-indigo-400 text-sm font-semibold mb-4 tracking-widest">
          JOIN THE COLLECTIVE
        </Text>
        <Text className="text-white text-3xl font-bold text-center mb-4">
          Prove you can think.
        </Text>
        <Text className="text-white text-3xl font-bold text-center mb-6">
          Build real software.
        </Text>
        <Text className="text-slate-400 text-lg text-center mb-8 max-w-md">
          A community of prompt-first builders creating real tools for real
          businesses. No CS degree required — just show us how your mind works.
        </Text>

        <Link href="/challenges" asChild>
          <Pressable className="bg-indigo-600 px-8 py-4 rounded-2xl">
            <Text className="text-white font-semibold text-lg">
              See The Challenges →
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

      {/* The Collective */}
      <View className="px-6 py-12">
        <Text className="text-white text-2xl font-bold mb-4">THE COLLECTIVE</Text>
        <Text className="text-slate-400 mb-6">
          More than a hiring platform — this is a community proving that
          prompt-first builders can ship real software for real businesses.
        </Text>

        <View className="gap-3 mb-8">
          <Text className="text-slate-300">
            ✓ Build a portfolio of deployed, validated projects
          </Text>
          <Text className="text-slate-300">
            ✓ Learn from peers — share prompts, patterns, and approaches
          </Text>
          <Text className="text-slate-300">
            ✓ Get credibility through real usage, not certificates
          </Text>
          <Text className="text-slate-300">
            ✓ Professional QA oversight on all projects
          </Text>
        </View>

        {/* How to Join */}
        <View className="bg-slate-800 p-6 rounded-2xl">
          <Text className="text-white font-bold text-lg mb-4">
            HOW TO JOIN
          </Text>

          <View className="gap-4">
            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold text-lg">1.</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">Pick a challenge</Text>
                <Text className="text-slate-400">
                  Real problems from real businesses
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold text-lg">2.</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">Build something</Text>
                <Text className="text-slate-400">
                  Use any LLM — Gemini, Claude, ChatGPT
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold text-lg">3.</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">Show your thinking</Text>
                <Text className="text-slate-400">
                  Record a Loom walking through your approach
                </Text>
              </View>
            </View>

            <View className="flex-row items-start gap-3">
              <Text className="text-indigo-400 font-bold text-lg">4.</Text>
              <View className="flex-1">
                <Text className="text-white font-semibold">Join the collective</Text>
                <Text className="text-slate-400">
                  Get feedback, collaborate, and grow
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Who This Is For */}
      <View className="px-6 py-12 mx-6 bg-slate-800/50 rounded-3xl mb-12">
        <View className="flex-row items-center gap-3 mb-4">
          <Users size={28} color="#6366f1" />
          <Text className="text-white text-2xl font-bold">WHO THIS IS FOR</Text>
        </View>

        <View className="gap-4">
          <View>
            <Text className="text-white font-semibold mb-1">
              Curious problem-solvers
            </Text>
            <Text className="text-slate-400">
              You don't need to code — you need to think clearly and prompt well
            </Text>
          </View>

          <View>
            <Text className="text-white font-semibold mb-1">
              Industry experts
            </Text>
            <Text className="text-slate-400">
              Your domain knowledge + basic prompting = more valuable than a dev
              with no context
            </Text>
          </View>

          <View>
            <Text className="text-white font-semibold mb-1">
              Not-quite-ready builders
            </Text>
            <Text className="text-slate-400">
              If this feels hard, we can help you level up first
            </Text>
          </View>
        </View>
      </View>

      {/* CTA */}
      <View className="px-6 py-12 items-center">
        <Text className="text-slate-400 text-center mb-4">
          Ready to prove yourself?
        </Text>
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
          Vibe Coding Collective © 2025
        </Text>
      </View>
    </ScrollView>
  );
}
