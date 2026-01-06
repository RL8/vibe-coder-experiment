import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import {
  Croissant,
  BellRing,
  CloudSun,
  Trophy,
  Bike,
  Flame,
  Heart,
} from "lucide-react-native";
import { CHALLENGES } from "../types";

const iconMap: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  bread: Croissant,
  "bell-ring": BellRing,
  "cloud-sun": CloudSun,
  trophy: Trophy,
  bike: Bike,
  flame: Flame,
  heart: Heart,
};

// Group challenges by business
const bakeryChalllenges = CHALLENGES.filter((c) =>
  c.businessName.includes("Bakery")
);
const croftChallenges = CHALLENGES.filter((c) =>
  c.businessName.includes("Croft")
);

export default function ChallengesPage() {
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
          <Text className="text-white font-semibold">Challenges</Text>
          <Link href="/submit" asChild>
            <Pressable>
              <Text className="text-indigo-400">Apply</Text>
            </Pressable>
          </Link>
        </View>
      </View>

      {/* Title */}
      <View className="px-6 py-8">
        <Text className="text-white text-3xl font-bold mb-2">THE PLAYGROUND</Text>
        <Text className="text-slate-400">
          Real businesses. Real problems. Pick one and show us how you think.
        </Text>
      </View>

      {/* Wild Hearth Bakery */}
      <View className="mx-6 mb-8 bg-slate-800/50 rounded-3xl p-6">
        <View className="flex-row items-center gap-3 mb-2">
          <Text className="text-2xl">🍞</Text>
          <Text className="text-white text-xl font-bold">WILD HEARTH BAKERY</Text>
        </View>
        <Text className="text-slate-400 mb-4">
          Wood-fired sourdough bakery | Wholesale + Retail | Scotland
        </Text>
        <View className="bg-slate-700/50 p-4 rounded-xl mb-6">
          <Text className="text-slate-300 text-sm">
            <Text className="text-indigo-400 font-semibold">THE PROBLEM: </Text>
            Sourdough takes 3 days. If a chef forgets to order by 2 PM Tuesday,
            there's no bread for Thursday.
          </Text>
        </View>

        <View className="flex-row flex-wrap gap-4">
          {bakeryChalllenges.map((challenge) => {
            const Icon = iconMap[challenge.icon] || Croissant;
            return (
              <Link
                key={challenge.id}
                href={`/submit?challenge=${challenge.id}`}
                asChild
              >
                <Pressable className="bg-slate-700 p-4 rounded-xl w-44 hover:bg-slate-600">
                  <Icon size={24} color="#6366f1" />
                  <Text className="text-white font-semibold mt-3 mb-1">
                    {challenge.title}
                  </Text>
                  <Text className="text-slate-400 text-sm mb-3">
                    {challenge.description}
                  </Text>
                  <Text className="text-indigo-400 text-sm font-medium">
                    Select →
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
      </View>

      {/* Comrie Croft */}
      <View className="mx-6 mb-8 bg-slate-800/50 rounded-3xl p-6">
        <View className="flex-row items-center gap-3 mb-2">
          <Text className="text-2xl">🏕️</Text>
          <Text className="text-white text-xl font-bold">COMRIE CROFT</Text>
        </View>
        <Text className="text-slate-400 mb-4">
          Eco-farm, Campsite, Wedding Venue | Perthshire, Scotland
        </Text>
        <View className="bg-slate-700/50 p-4 rounded-xl mb-6">
          <Text className="text-slate-300 text-sm">
            <Text className="text-indigo-400 font-semibold">THE PROBLEM: </Text>
            A "stacked" business—bike rental, weddings, cafe, campsite—with no
            unified system to manage it all.
          </Text>
        </View>

        <View className="flex-row flex-wrap gap-4">
          {croftChallenges.map((challenge) => {
            const Icon = iconMap[challenge.icon] || Trophy;
            return (
              <Link
                key={challenge.id}
                href={`/submit?challenge=${challenge.id}`}
                asChild
              >
                <Pressable className="bg-slate-700 p-4 rounded-xl w-44 hover:bg-slate-600">
                  <Icon size={24} color="#6366f1" />
                  <Text className="text-white font-semibold mt-3 mb-1">
                    {challenge.title}
                  </Text>
                  <Text className="text-slate-400 text-sm mb-3">
                    {challenge.description}
                  </Text>
                  <Text className="text-indigo-400 text-sm font-medium">
                    Select →
                  </Text>
                </Pressable>
              </Link>
            );
          })}
        </View>
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
