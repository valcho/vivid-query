import { Accordion } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import type { NavigationEntry } from '@/router';
import type { Path } from '@/router/utils';
import { NavbarEntries } from './Entries';

export interface NavbarGroupProps {
  name: string;
  children: NavigationEntry[];
  path?: Path;
  icon?: JSX.Element;

  currentPath: string;
}

export const NavbarGroup = ({
  name,
  children,
  path,
  icon,
  currentPath,
}: NavbarGroupProps) => {
  const navigate = useNavigate();

  return (
    <Accordion.Item value={name}>
      <Accordion.Control onClick={() => path && navigate(path)} icon={icon}>
        {name}
      </Accordion.Control>

      <Accordion.Panel>
        <NavbarEntries data={children} currentPath={currentPath} />
      </Accordion.Panel>
    </Accordion.Item>
  );
};
