import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function PUT(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function DELETE(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}

export async function PATCH(request: Request) {
  return NextResponse.json({ message: "Hello World" });
}
