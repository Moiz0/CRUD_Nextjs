import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";

const getTopics = async () => {
  try {
    const res = await fetch("/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch Posts");

    return res.json();
  } catch (error) {
    console.log("Error loading Post: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <Stack spacing={2}>
      {topics.map((t) => (
        <Card key={t._id} variant="outlined">
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h6">{t.title}</Typography>
                <Typography variant="body2">{t.description}</Typography>
              </Box>
              <Box>
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`} passHref>
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
