import Sidebar from "@/components/dashboard/Sidebar";
import SkillMatcher from "@/components/ai/SkillMatcher";

export default function AIMatchPage() {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-white mb-10">
          AI Match
        </h1>

        <SkillMatcher />
      </div>
    </div>
  );
}