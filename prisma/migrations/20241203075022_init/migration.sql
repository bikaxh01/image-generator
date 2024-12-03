-- CreateEnum
CREATE TYPE "STYLE" AS ENUM ('VIVID', 'NATURAL');

-- CreateEnum
CREATE TYPE "IMAGERESOLUTION" AS ENUM ('R1024x1024', 'R1024x1792', 'R1792x1024', 'R256x256', 'R512x512');

-- CreateEnum
CREATE TYPE "QUALITY" AS ENUM ('STANDARD', 'HD');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prompt" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "prompt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "generatedImage" (
    "id" TEXT NOT NULL,
    "promptId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "resolution" "IMAGERESOLUTION" NOT NULL DEFAULT 'R1024x1024',
    "style" "STYLE" NOT NULL,
    "quality" "QUALITY" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "generatedImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "conversation" ADD CONSTRAINT "conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prompt" ADD CONSTRAINT "prompt_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "conversation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "generatedImage" ADD CONSTRAINT "generatedImage_promptId_fkey" FOREIGN KEY ("promptId") REFERENCES "prompt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
