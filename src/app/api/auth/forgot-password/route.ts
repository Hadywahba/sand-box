import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = await req.json();

  if (email === 'test@test.com') {
    return NextResponse.json(
      {
        success: true,
        message: 'Please check your email to reset your password.',
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    { success: false, message: 'Email not found' },
    { status: 404 },
  );
}
