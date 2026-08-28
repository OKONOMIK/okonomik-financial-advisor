'use client';

import type { JSX } from 'react';
import { Card } from '@vercel/geistcn/components/card';
import { Input } from '@vercel/geistcn/components/input';
import { Button } from '@vercel/geistcn/components/button';
import { Badge } from '@vercel/geistcn/components/badge';
import { Note } from '@vercel/geistcn/components/note';
import { Avatar, GenericAvatar } from '@vercel/geistcn/components/avatar';

export function ProjectForm(): JSX.Element {
  return (
    <Card className="flex flex-col gap-5 p-6">
      <div className="flex flex-col gap-1">
        <h3 className="text-heading-16 text-[var(--ds-gray-1000)]">
          Create a project
        </h3>
        <p className="text-copy-14 text-[var(--ds-gray-900)]">
          Deploy from a Git repository in seconds.
        </p>
      </div>
      <Input
        id="project-name"
        label="Project name"
        placeholder="my-app"
        size="large"
      />
      <Input
        id="git-url"
        label="Git repository"
        placeholder="vercel/next.js"
        prefix="github.com/"
        size="large"
      />
      <div className="flex items-center gap-3">
        <Button>Deploy</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </Card>
  );
}

export function BadgeRow(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="gray">Draft</Badge>
      <Badge variant="blue">Building</Badge>
      <Badge variant="green">Ready</Badge>
      <Badge variant="amber">Queued</Badge>
      <Badge variant="red">Error</Badge>
      <Badge variant="purple">Preview</Badge>
      <Badge variant="trial">Pro Trial</Badge>
    </div>
  );
}

export function ButtonRow(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="small">Primary</Button>
      <Button variant="secondary" size="small">
        Secondary
      </Button>
      <Button variant="tertiary" size="small">
        Tertiary
      </Button>
      <Button variant="error" size="small">
        Delete
      </Button>
      <Button size="small" loading>
        Loading
      </Button>
    </div>
  );
}

export function TeamRow(): JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <GenericAvatar placeholder letter="A" title="Ada Lovelace" size={36} />
      <GenericAvatar placeholder letter="G" title="Grace Hopper" size={36} />
      <GenericAvatar placeholder letter="T" title="Alan Turing" size={36} />
      <Avatar placeholder size={36} />
      <span className="text-copy-14 text-[var(--ds-gray-900)]">
        4 collaborators
      </span>
    </div>
  );
}

export function StatusNote(): JSX.Element {
  return (
    <Note type="success" label="Deployed">
      Your latest commit is live on production.
    </Note>
  );
}
