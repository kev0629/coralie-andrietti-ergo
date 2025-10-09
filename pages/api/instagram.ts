import type { NextApiRequest, NextApiResponse } from "next";

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  timestamp: string;
}

interface InstagramAPIResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessToken = process.env.INSTAGRAM_API_KEY;
  const userId = process.env.INSTAGRAM_USER_ID || "me"; // Default to 'me' if no user ID is provided

  if (!accessToken) {
    return res
      .status(500)
      .json({
        error: "Instagram access token not found in environment variables.",
      });
  }

  const fields = "id,caption,media_url,media_type,permalink,timestamp";
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error fetching from Instagram API:", errorData);
      return res
        .status(response.status)
        .json({
          error: "Failed to fetch data from Instagram.",
          details: errorData,
        });
    }

    const data: InstagramAPIResponse = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    res.status(500).json({ error: "An unexpected error occurred." });
  }
}
