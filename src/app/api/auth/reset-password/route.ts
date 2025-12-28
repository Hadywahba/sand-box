import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { token, password } = await req.json();

  if (token === 'valid' && password) {
    return NextResponse.json(
      { success: true, message: 'Password reset successfully' },
      { status: 200 },
    );
  }

  return NextResponse.json(
    { success: false, message: 'Invalid token or password' },
    { status: 400 },
  );
}
