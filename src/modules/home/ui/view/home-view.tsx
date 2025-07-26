"use client";
import { RocketIcon, BotIcon, VideoIcon, FileTextIcon } from "lucide-react";
import { JSX } from "react";

export const HomeView = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9fafb] px-4 py-12">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-emerald-600">Meet.AI</span> 👋
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Meet.AI connects users with intelligent AI agents via virtual
          meetings. Whether you're looking for help, automation, or insightful
          conversation, our platform handles it all—efficiently and
          intelligently.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl w-full">
        <FeatureCard
          icon={<RocketIcon className="w-6 h-6 text-blue-600" />}
          title="AI-Powered Meetings"
          description="Schedule real-time meetings where AI agents respond to your queries with intelligent, contextual responses."
        />
        <FeatureCard
          icon={<BotIcon className="w-6 h-6 text-green-600" />}
          title="Smart Agents"
          description="Customize agents by assigning specific tasks and responsibilities to get fast, human-like responses."
        />
        <FeatureCard
          icon={<VideoIcon className="w-6 h-6 text-purple-600" />}
          title="Meeting Recordings"
          description="All meetings are automatically recorded and securely stored, so you can revisit important details anytime."
        />
        <FeatureCard
          icon={<FileTextIcon className="w-6 h-6 text-orange-500" />}
          title="Transcripts & Summaries"
          description="Get complete transcripts and auto-generated summaries of your meetings—perfect for documentation and follow-up."
        />
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition-all hover:-translate-y-1">
    <div className="mb-3">{icon}</div>
    <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);
