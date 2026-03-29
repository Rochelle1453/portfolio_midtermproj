"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
  const [likes, setLikes] = useState<number>(() => {
    if (typeof window === "undefined") return 0;
    const stored = localStorage.getItem(`likes-${projectId}`);
    return stored ? parseInt(stored) : 0;
  });

  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window === "undefined") return [];
    const stored = localStorage.getItem(`comments-${projectId}`);
    return stored ? JSON.parse(stored) : [];
  });

  const [showComments, setShowComments] = useState(false);
  const [input, setInput] = useState("");
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const commentBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showComments && commentBtnRef.current) {
      const rect = commentBtnRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 4,
        left: rect.right,
      });
    }
  }, [showComments]);

  useEffect(() => {
    if (!showComments) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        commentBtnRef.current &&
        !commentBtnRef.current.contains(e.target as Node)
      ) {
        setShowComments(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showComments]);

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

    const newComment = { id: Date.now(), text: input };
    const updated = [newComment, ...comments];

    setComments(updated);
    setInput("");
    localStorage.setItem(`comments-${projectId}`, JSON.stringify(updated));
  }

  const dropdown = showComments
    ? createPortal(
        <div
          ref={dropdownRef}
          className="fixed z-[9999] w-[16rem] sm:w-[18rem] max-w-[90vw]"
          style={{
            top: dropdownPos.top,
            left: dropdownPos.left,
            transform: "translateX(-100%)",
          }}
        >
          <div className="rounded-md border bg-background p-3 shadow-lg animate-in fade-in zoom-in-95">
            <div className="flex gap-2">
              <Input
                placeholder="Write a comment..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="h-9 text-xs w-full"
              />
              <Button
                size="sm"
                onClick={addComment}
                disabled={!input.trim()}
                className="text-xs"
              >
                Post
              </Button>
            </div>

            <div className="max-h-40 overflow-y-auto space-y-2 mt-2">
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
        </div>,
        document.body
      )
    : null;

  return (
    <div className="relative flex items-center gap-1 sm:gap-2 shrink-0">
      <div className="absolute right-10 bottom-5 pointer-events-none">
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
        className="text-red-500 hover:scale-110 active:scale-125 transition-transform"
      >
        <Heart className="h-4 w-4 fill-current" />
      </Button>

      <span className="text-xs text-muted-foreground w-5 text-center">
        {likes}
      </span>

      <Button
        ref={commentBtnRef}
        variant="ghost"
        size="icon"
        onClick={() => setShowComments((prev) => !prev)}
      >
        <MessageCircle className="h-4 w-4" />
      </Button>

      {dropdown}
    </div>
  );
}