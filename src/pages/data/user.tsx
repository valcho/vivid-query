import { Card } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { User } from '@auth';
import { MantineReactTable } from 'mantine-react-table';
import type { HandleFunctionResolver } from '@/router';

export default function DataUser() {
  const { data } = useQuery<User[]>({
    queryKey: ['user'],
    queryFn: async () => {
      const user = await fetch('/api/user').then((res) => res.json());

      return user;
    },
  });

  return (
    <Card>
      <h1 className="text-3xl font-semibold mb-2">Users</h1>
      <p className="mb-4">
        Table powered by <b>mantine-react-table</b>.
      </p>

      <MantineReactTable
        data={data ?? []}
        columns={[
          {
            header: '#',
            accessorKey: 'id',
          },
          {
            header: 'Name',
            accessorKey: 'name',
          },
          {
            header: 'Role',
            accessorKey: 'role',
          },
        ]}
      />
    </Card>
  );
}

export const Handle: HandleFunctionResolver = () => ({
  title: 'Users',
  acl: false,
});
