import { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import { ExternalLink } from "lucide-react-native";
import { supabase } from "../lib/supabase";
import { CHALLENGES } from "../types";

type Submission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  challenge_id: string;
  evidence_url: string | null;
  description: string | null;
  status: "pending" | "reviewed" | "accepted" | "rejected";
};

const statusColors = {
  pending: "bg-yellow-900/50 text-yellow-300",
  reviewed: "bg-blue-900/50 text-blue-300",
  accepted: "bg-green-900/50 text-green-300",
  rejected: "bg-red-900/50 text-red-300",
};

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) setSubmissions(data);
    setLoading(false);
  };

  const updateStatus = async (
    id: string,
    status: Submission["status"]
  ) => {
    await supabase.from("submissions").update({ status }).eq("id", id);
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  };

  const getChallenge = (id: string) =>
    CHALLENGES.find((c) => c.id === id);

  const filteredSubmissions =
    filter === "all"
      ? submissions
      : submissions.filter((s) => s.status === filter);

  if (loading) {
    return (
      <View className="flex-1 bg-slate-900 items-center justify-center">
        <ActivityIndicator size="large" color="#6366f1" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-slate-900">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 border-b border-slate-800">
        <Text className="text-white font-bold text-lg">VIBE ADMIN</Text>
        <Link href="/" asChild>
          <Pressable>
            <Text className="text-slate-400">← Back to site</Text>
          </Pressable>
        </Link>
      </View>

      {/* Title & Stats */}
      <View className="px-6 py-6 flex-row items-center justify-between">
        <Text className="text-white text-2xl font-bold">SUBMISSIONS</Text>
        <Text className="text-slate-400">{submissions.length} total</Text>
      </View>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-6 mb-6"
      >
        <View className="flex-row gap-2">
          {["all", "pending", "reviewed", "accepted", "rejected"].map(
            (status) => (
              <Pressable
                key={status}
                onPress={() => setFilter(status)}
                className={`px-4 py-2 rounded-full ${
                  filter === status ? "bg-indigo-600" : "bg-slate-800"
                }`}
              >
                <Text
                  className={filter === status ? "text-white" : "text-slate-400"}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </Text>
              </Pressable>
            )
          )}
        </View>
      </ScrollView>

      {/* Submissions List */}
      <View className="px-6 gap-4 pb-8">
        {filteredSubmissions.length === 0 ? (
          <View className="bg-slate-800/50 p-8 rounded-2xl items-center">
            <Text className="text-slate-400">No submissions yet</Text>
          </View>
        ) : (
          filteredSubmissions.map((submission) => {
            const challenge = getChallenge(submission.challenge_id);
            return (
              <View
                key={submission.id}
                className="bg-slate-800 rounded-2xl p-6"
              >
                {/* Header Row */}
                <View className="flex-row items-start justify-between mb-3">
                  <View className="flex-row items-center gap-3">
                    <View
                      className={`px-3 py-1 rounded-full ${
                        statusColors[submission.status]
                      }`}
                    >
                      <Text className="text-sm font-medium uppercase">
                        {submission.status}
                      </Text>
                    </View>
                    <Text className="text-white font-semibold">
                      {submission.name}
                    </Text>
                  </View>
                  <Text className="text-slate-500 text-sm">
                    {new Date(submission.created_at).toLocaleDateString()}
                  </Text>
                </View>

                {/* Challenge */}
                {challenge && (
                  <View className="flex-row items-center gap-2 mb-3">
                    <Text>
                      {challenge.businessName.includes("Bakery") ? "🍞" : "🏕️"}
                    </Text>
                    <Text className="text-slate-400">
                      {challenge.businessName} — {challenge.title}
                    </Text>
                  </View>
                )}

                {/* Email */}
                <Text className="text-slate-400 text-sm mb-3">
                  {submission.email}
                </Text>

                {/* Evidence Link */}
                {submission.evidence_url && (
                  <View className="mb-3">
                    <Pressable
                      className="flex-row items-center gap-1"
                      onPress={() =>
                        window.open(submission.evidence_url!, "_blank")
                      }
                    >
                      <ExternalLink size={14} color="#6366f1" />
                      <Text className="text-indigo-400 text-sm">
                        View Evidence
                      </Text>
                    </Pressable>
                  </View>
                )}

                {/* Description */}
                {submission.description && (
                  <View className="bg-slate-700/50 p-3 rounded-xl mb-4">
                    <Text className="text-slate-300 text-sm">
                      "{submission.description}"
                    </Text>
                  </View>
                )}

                {/* Actions */}
                <View className="flex-row flex-wrap gap-2">
                  {submission.status === "pending" && (
                    <>
                      <Pressable
                        className="bg-blue-600 px-4 py-2 rounded-lg"
                        onPress={() => updateStatus(submission.id, "reviewed")}
                      >
                        <Text className="text-white text-sm">Mark Reviewed</Text>
                      </Pressable>
                      <Pressable
                        className="bg-green-600 px-4 py-2 rounded-lg"
                        onPress={() => updateStatus(submission.id, "accepted")}
                      >
                        <Text className="text-white text-sm">Accept</Text>
                      </Pressable>
                      <Pressable
                        className="bg-red-600/50 px-4 py-2 rounded-lg"
                        onPress={() => updateStatus(submission.id, "rejected")}
                      >
                        <Text className="text-white text-sm">Reject</Text>
                      </Pressable>
                    </>
                  )}
                  {submission.status === "reviewed" && (
                    <>
                      <Pressable
                        className="bg-green-600 px-4 py-2 rounded-lg"
                        onPress={() => updateStatus(submission.id, "accepted")}
                      >
                        <Text className="text-white text-sm">Accept</Text>
                      </Pressable>
                      <Pressable
                        className="bg-red-600/50 px-4 py-2 rounded-lg"
                        onPress={() => updateStatus(submission.id, "rejected")}
                      >
                        <Text className="text-white text-sm">Reject</Text>
                      </Pressable>
                    </>
                  )}
                </View>
              </View>
            );
          })
        )}
      </View>
    </ScrollView>
  );
}
