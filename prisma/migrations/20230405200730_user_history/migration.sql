-- AlterTable
ALTER TABLE "User" ADD COLUMN "tentativas" INTEGER DEFAULT 0;

-- CreateTable
CREATE TABLE "user_history_login" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date_login" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_sucess" BOOLEAN NOT NULL,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "user_history_login_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_history_login_id_key" ON "user_history_login"("id");
