import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ subreddit: string }> }) {
  const { subreddit } = await params;
  const { searchParams } = request.nextUrl;

  const after = searchParams.get('after') || '';
  const before = searchParams.get('before') || '';

  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}/hot.json?after=${after}&before=${before}limit=30&include_over_18=true&sr_detail=true`, {
      // cache: "force-cache",
      // next: {
      //   revalidate: 60 * 60 * 24
      // }
    });
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
