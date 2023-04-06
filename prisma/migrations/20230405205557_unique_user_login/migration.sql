/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `user_history_login` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_history_login_user_id_key" ON "user_history_login"("user_id");
