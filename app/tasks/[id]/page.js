import { getTasks } from "@/utils/actions";
import React from "react";
import Link from "next/link";
import EditForm from "@/components/EditForm";
export const dynamic = 'force-dynamic';

const EditTaskPage = async ({ params }) => {
  const task = await getTasks(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default EditTaskPage;
