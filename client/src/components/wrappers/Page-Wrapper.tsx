import { ReactNode } from 'react';

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-100">
      <div>{children}</div>
    </div>
  );
}