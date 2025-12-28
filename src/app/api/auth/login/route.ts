import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // mock validation
  if (email === 'test@test.com' && password === '123456') {
    return NextResponse.json(
      {
        success: true,
        token: 'mock-jwt-token',
        user: { email, _id: '123' },
      },
      { status: 200 },
    );
  }

  return NextResponse.json(
    { success: false, message: 'Invalid email or password' },
    { status: 401 },
  );
}
