-- CreateTable
CREATE TABLE "tb_modules" (
    "id" SERIAL NOT NULL,
    "module_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_classes" (
    "id" SERIAL NOT NULL,
    "class_name" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "moduleId" INTEGER NOT NULL,

    CONSTRAINT "tb_classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_roles" (
    "id" SERIAL NOT NULL,
    "role" VARCHAR NOT NULL,

    CONSTRAINT "tb_roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "roles_id" INTEGER NOT NULL,

    CONSTRAINT "tb_users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tb_users_username_key" ON "tb_users"("username");

-- AddForeignKey
ALTER TABLE "tb_classes" ADD CONSTRAINT "tb_classes_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "tb_modules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_users" ADD CONSTRAINT "tb_users_roles_id_fkey" FOREIGN KEY ("roles_id") REFERENCES "tb_roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
