import { Feature } from '@/lib/data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

import React, { useState } from 'react';

export const HoverEffect = ({
  items,
  className
}: {
  items?: Feature[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2',
        className
      )}
    >
      {items?.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
          <Card className="grid items-center" key={idx}>
            <div className="p-2">
              <item.icon className="text-3xl" />
            </div>

            <CardDescription>{item.title}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 flex items-center',
        className
      )}
    >
      {children}
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn('text-zinc-100 font-bold tracking-wide mt-4', className)}
    >
      {children}
    </div>
  );
};
export const CardDescription = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn('text-zinc-400 leading-relaxed text-sm', className)}>
      {children}
    </p>
  );
};
