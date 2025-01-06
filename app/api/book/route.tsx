import Book from "@/app/api/book/book";
export async function GET() {
    return Response.json(Book )
}
export async function POST(request:Request) {
    const boook=await request.json()
    Book.push(boook)
    return Response.json(Book)
}
