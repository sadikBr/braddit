import { NextRequest, NextResponse } from 'next/server';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ subreddit: string }> }) {
  const { subreddit } = await params;

  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?limit=30&include_over_18=true&sr_detail=true`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
