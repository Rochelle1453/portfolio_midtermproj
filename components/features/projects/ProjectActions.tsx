"use client";

import { useEffect, useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  projectId: string;
};

type FloatingHeart = {
  id: number;
};

type Comment = {
  id: number;
  text: string;
};

export function ProjectActions({ projectId }: Props) {
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes-${projectId}`);
    const storedComments = localStorage.getItem(`comments-${projectId}`);
    if (storedLikes) {
      setLikes(parseInt(storedLikes));
    }
    if (storedComments) setComments(JSON.parse(storedComments));
  }, [projectId]);

  function handleLike() {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes-${projectId}`, newLikes.toString());

    const id = Date.now();
    setHearts((prev) => [...prev, { id }]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== id));
    }, 800);
  }

  function addComment() {
    if (!input.trim()) return;

    const newComment = {
      id: Date.now(),
      text: input,
    };

    const updated = [newComment, ...comments];

    setComments(updated);
    setInput("");
    localStorage.setItem(`comments-${projectId}`, JSON.stringify(updated));
  }

  return (
    <div className="relative flex items-center gap-1 shrink-0">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 pointer-events-none">
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="h-4 w-4 text-red-500 fill-current animate-float"
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleLike}
        className="transition-transform hover:scale-110 active:scale-125 text-red-500"
      >
        <Heart className="h-4 w-4 fill-current" />
      </Button>

      <span className="text-xs text-muted-foreground min-w-[20px] text-center">
        {likes}
      </span>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => setShowComments((prev) => !prev)}
      >
        <MessageCircle className="h-4 w-4" />
      </Button>

      {showComments && (
        <div className="w-64 border rounded-md p-2 bg-background shadow-md space-y-2">
          <div className="flex gap-1">
            <Input
              placeholder="Write a comment..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="h-8 text-xs"
            />
            <Button size="sm" onClick={addComment}>
              Post
            </Button>
          </div>

          <div className="max-h-32 overflow-y-auto space-y-1">
            {comments.length > 0 ? (
              comments.map((c) => (
                <div key={c.id} className="text-xs bg-muted px-2 py-1 rounded">
                  {c.text}
                </div>
              ))
            ) : (
              <p className="text-xs text-muted-foreground">No comments yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}