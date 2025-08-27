"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { users } from "@/lib";
import { ChevronDown } from "lucide-react";

const Avatars = () => {
  const [open, setOpen] = useState(false);

  const visibleUsers = users.slice(0, 4);
  const hiddenCount = users.length - visibleUsers.length;

  return (
    <div>
      {/* Collapsed avatars */}
      <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 w-[230px]">
        {visibleUsers.map((user) => (
          <div key={user.id} className="flex items-center relative -space-x-2">
            <Avatar className="w-10 h-10 border-2 border-white">
              <AvatarImage
                src={user.image}
                alt={user.name}
                className="object-cover w-full h-full rounded-full"
              />
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            {user.isSpeaking && (
              <span className="absolute -top-1 -left-1 bg-black text-white rounded-full p-1 text-xs">
                🔊
              </span>
            )}
          </div>
        ))}
        {hiddenCount > 0 && (
          <Button
            variant="ghost"
            className="rounded-full px-2 text-gray-500 hover:cursor-pointer"
            onClick={() => setOpen(true)}
          >
            +{hiddenCount}
            <ChevronDown />
          </Button>
        )}
      </div>

      {/* Expanded dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Voice Chat</DialogTitle>
          </DialogHeader>
          <div className="grid grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col items-center space-y-1"
              >
                <div className="relative">
                  <Avatar className="w-14 h-14">
                    <AvatarImage src={user.image} alt={user.name} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.isSpeaking && (
                    <span className="absolute -top-1 -left-1 bg-black text-white rounded-full p-1 text-xs">
                      🔊
                    </span>
                  )}
                </div>
                <span className="text-sm">{user.name}</span>
              </div>
            ))}
          </div>
          <Button className="w-full mt-4">Join Now</Button>
          <p className="text-xs text-center text-gray-500">
            Mic will be muted initially.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Avatars;
