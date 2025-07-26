"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Stack } from "@mui/material";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) throw new Error("Failed to update topic");

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Post Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          fullWidth
        />
        <TextField
          label="Post Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="success">
          Update Topic
        </Button>
      </Stack>
    </form>
  );
}
