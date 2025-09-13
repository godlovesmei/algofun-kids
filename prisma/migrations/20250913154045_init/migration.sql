-- CreateEnum
CREATE TYPE "public"."Grade" AS ENUM ('GRADE_1', 'GRADE_2', 'GRADE_3', 'GRADE_4', 'GRADE_5', 'GRADE_6');

-- CreateEnum
CREATE TYPE "public"."KidLevel" AS ENUM ('BEGINNER', 'EXPLORER', 'PROBLEM_SOLVER', 'LOGIC_MASTER');

-- CreateEnum
CREATE TYPE "public"."KidLearningStyle" AS ENUM ('VISUAL_GAMES', 'STORY_BASED', 'HANDS_ON', 'PUZZLE_LOVER');

-- CreateEnum
CREATE TYPE "public"."RewardType" AS ENUM ('STICKERS', 'STARS', 'COINS', 'BADGES', 'VIRTUAL_PETS');

-- CreateEnum
CREATE TYPE "public"."AgeGroup" AS ENUM ('AGE_6_7', 'AGE_6_8', 'AGE_8_10', 'AGE_10_12');

-- CreateEnum
CREATE TYPE "public"."GameType" AS ENUM ('PATTERN_MATCHING', 'SEQUENCE_BUILDING', 'LOGIC_PUZZLE', 'NUMBER_GAME', 'SHAPE_SORTING', 'MEMORY_CHALLENGE', 'STORY_INTERACTIVE');

-- CreateEnum
CREATE TYPE "public"."KidDifficulty" AS ENUM ('SUPER_EASY', 'EASY', 'MEDIUM', 'CHALLENGING');

-- CreateEnum
CREATE TYPE "public"."KidRecommendationType" AS ENUM ('NEXT_GAME', 'NEW_STORY', 'SKILL_PRACTICE', 'FUN_CHALLENGE', 'REVIEW_ACTIVITY');

-- CreateEnum
CREATE TYPE "public"."KidRecommendationStatus" AS ENUM ('NEW', 'SEEN', 'PLAYED', 'LOVED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "public"."AchievementCategory" AS ENUM ('FIRST_STEPS', 'SKILL_BUILDER', 'PERSISTENCE', 'CREATIVITY', 'HELPING_OTHERS', 'DAILY_LEARNER');

-- CreateEnum
CREATE TYPE "public"."StickerCategory" AS ENUM ('ANIMALS', 'NATURE', 'SPACE', 'FANTASY', 'FOOD', 'TOYS', 'EMOTIONS');

-- CreateEnum
CREATE TYPE "public"."StickerRarity" AS ENUM ('COMMON', 'RARE', 'EPIC', 'LEGENDARY');

-- CreateEnum
CREATE TYPE "public"."KidActivityType" AS ENUM ('GAME_START', 'GAME_COMPLETE', 'GAME_PAUSE', 'GAME_RESUME', 'STORY_READ', 'PUZZLE_SOLVE', 'STICKER_EARN', 'ACHIEVEMENT_UNLOCK', 'HELP_REQUEST', 'HINT_USED', 'MISTAKE_MADE', 'PERFECT_COMPLETION', 'BREAK_TIME', 'DRAG_ACTION', 'CLICK_ACTION', 'UNDO_ACTION');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "parentEmail" TEXT,
    "grade" "public"."Grade" NOT NULL DEFAULT 'GRADE_1',
    "age" INTEGER,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "parentId" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."kid_profiles" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "favoriteColor" TEXT,
    "favoriteAnimal" TEXT,
    "hobbies" TEXT[],
    "currentLevel" "public"."KidLevel" NOT NULL DEFAULT 'BEGINNER',
    "logicSkill" INTEGER NOT NULL DEFAULT 1,
    "patternSkill" INTEGER NOT NULL DEFAULT 1,
    "problemSolving" INTEGER NOT NULL DEFAULT 1,
    "learningStyle" "public"."KidLearningStyle" NOT NULL DEFAULT 'VISUAL_GAMES',
    "attentionSpan" INTEGER NOT NULL DEFAULT 15,
    "preferredTime" TEXT,
    "favoriteReward" "public"."RewardType" NOT NULL DEFAULT 'STICKERS',
    "totalStickers" INTEGER NOT NULL DEFAULT 0,
    "totalStars" INTEGER NOT NULL DEFAULT 0,
    "totalCoins" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kid_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."worlds" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "worlds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."stories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "worldId" TEXT NOT NULL,
    "ageGroup" "public"."AgeGroup" NOT NULL DEFAULT 'AGE_6_8',
    "estimatedTime" INTEGER NOT NULL DEFAULT 10,
    "hasNarration" BOOLEAN NOT NULL DEFAULT true,
    "illustrations" TEXT[],
    "skillsFocus" TEXT[],
    "concepts" TEXT[],
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."games" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "public"."GameType" NOT NULL,
    "worldId" TEXT,
    "storyId" TEXT,
    "ageGroup" "public"."AgeGroup" NOT NULL DEFAULT 'AGE_6_8',
    "difficulty" "public"."KidDifficulty" NOT NULL DEFAULT 'EASY',
    "maxTime" INTEGER,
    "gameData" JSONB NOT NULL,
    "backgroundMusic" TEXT,
    "soundEffects" TEXT[],
    "animations" JSONB,
    "starsReward" INTEGER NOT NULL DEFAULT 1,
    "coinsReward" INTEGER NOT NULL DEFAULT 5,
    "stickersReward" TEXT[],
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."story_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "storyId" TEXT NOT NULL,
    "currentChapter" INTEGER NOT NULL DEFAULT 1,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "timeSpent" INTEGER NOT NULL DEFAULT 0,
    "attentionScore" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "enjoymentScore" INTEGER,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "lastReadAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "story_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."game_progress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "score" INTEGER NOT NULL DEFAULT 0,
    "bestScore" INTEGER NOT NULL DEFAULT 0,
    "stars" INTEGER NOT NULL DEFAULT 0,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "timeSpent" INTEGER NOT NULL DEFAULT 0,
    "sessionsCount" INTEGER NOT NULL DEFAULT 0,
    "difficultyRating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "helpRequested" INTEGER NOT NULL DEFAULT 0,
    "mistakeCount" INTEGER NOT NULL DEFAULT 0,
    "funRating" INTEGER,
    "firstPlayedAt" TIMESTAMP(3),
    "lastPlayedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "game_progress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."puzzle_submissions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "answer" JSONB NOT NULL,
    "isCorrect" BOOLEAN NOT NULL DEFAULT false,
    "attempts" INTEGER NOT NULL DEFAULT 1,
    "hintsUsed" INTEGER NOT NULL DEFAULT 0,
    "timeToSolve" INTEGER,
    "feedback" TEXT,
    "encouragement" TEXT,
    "nextSuggestion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "puzzle_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ai_chats" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "kidMessage" TEXT NOT NULL,
    "aiResponse" TEXT NOT NULL,
    "context" JSONB,
    "aiPersonality" TEXT NOT NULL DEFAULT 'friendly_teacher',
    "responseType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."kid_recommendations" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "public"."KidRecommendationType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "targetType" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "icon" TEXT,
    "color" TEXT,
    "animation" TEXT,
    "skillMatch" DOUBLE PRECISION NOT NULL,
    "funFactor" DOUBLE PRECISION NOT NULL,
    "reasoning" TEXT NOT NULL,
    "status" "public"."KidRecommendationStatus" NOT NULL DEFAULT 'NEW',
    "viewedAt" TIMESTAMP(3),
    "playedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kid_recommendations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."achievements" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "category" "public"."AchievementCategory" NOT NULL,
    "requirement" JSONB NOT NULL,
    "reward" JSONB NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."kid_achievements" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "achievementId" TEXT NOT NULL,
    "progress" INTEGER NOT NULL DEFAULT 0,
    "maxProgress" INTEGER NOT NULL DEFAULT 100,
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "unlockedAt" TIMESTAMP(3),
    "wasCelebrated" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kid_achievements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."stickers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" "public"."StickerCategory" NOT NULL,
    "rarity" "public"."StickerRarity" NOT NULL DEFAULT 'COMMON',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "stickers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_stickers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "stickerId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_stickers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."parent_reports" (
    "id" TEXT NOT NULL,
    "childId" TEXT NOT NULL,
    "reportDate" DATE NOT NULL,
    "playTimeMinutes" INTEGER NOT NULL DEFAULT 0,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "storiesRead" INTEGER NOT NULL DEFAULT 0,
    "newSkillsLearned" TEXT[],
    "skillImprovements" JSONB NOT NULL,
    "challengesFaced" TEXT[],
    "achievements" TEXT[],
    "parentTips" TEXT[],
    "nextActivities" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parent_reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."kid_activities" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "action" "public"."KidActivityType" NOT NULL,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT,
    "duration" INTEGER,
    "sessionId" TEXT,
    "deviceType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kid_activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "public"."users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "kid_profiles_userId_key" ON "public"."kid_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "story_progress_userId_storyId_key" ON "public"."story_progress"("userId", "storyId");

-- CreateIndex
CREATE UNIQUE INDEX "game_progress_userId_gameId_key" ON "public"."game_progress"("userId", "gameId");

-- CreateIndex
CREATE UNIQUE INDEX "kid_achievements_userId_achievementId_key" ON "public"."kid_achievements"("userId", "achievementId");

-- CreateIndex
CREATE UNIQUE INDEX "user_stickers_userId_stickerId_key" ON "public"."user_stickers"("userId", "stickerId");

-- CreateIndex
CREATE UNIQUE INDEX "parent_reports_childId_reportDate_key" ON "public"."parent_reports"("childId", "reportDate");

-- CreateIndex
CREATE INDEX "kid_activities_userId_createdAt_idx" ON "public"."kid_activities"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."users" ADD CONSTRAINT "users_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kid_profiles" ADD CONSTRAINT "kid_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."stories" ADD CONSTRAINT "stories_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "public"."worlds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."games" ADD CONSTRAINT "games_worldId_fkey" FOREIGN KEY ("worldId") REFERENCES "public"."worlds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."games" ADD CONSTRAINT "games_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "public"."stories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."story_progress" ADD CONSTRAINT "story_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."story_progress" ADD CONSTRAINT "story_progress_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "public"."stories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."game_progress" ADD CONSTRAINT "game_progress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."game_progress" ADD CONSTRAINT "game_progress_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."puzzle_submissions" ADD CONSTRAINT "puzzle_submissions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."puzzle_submissions" ADD CONSTRAINT "puzzle_submissions_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "public"."games"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ai_chats" ADD CONSTRAINT "ai_chats_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kid_recommendations" ADD CONSTRAINT "kid_recommendations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kid_achievements" ADD CONSTRAINT "kid_achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."kid_achievements" ADD CONSTRAINT "kid_achievements_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "public"."achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_stickers" ADD CONSTRAINT "user_stickers_stickerId_fkey" FOREIGN KEY ("stickerId") REFERENCES "public"."stickers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
