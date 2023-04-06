-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name_user" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "tentativas" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("ativo", "email", "id", "name_user", "password", "tentativas") SELECT "ativo", "email", "id", "name_user", "password", "tentativas" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
