import { cn } from '@/lib/utils';

export const Grid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn('grid grid-cols-4 gap-2 max-w-8xl', className)}>
      {children}
    </div>
  );
};

export const GridItem = ({
  className,
  image
}: {
  className?: string;
  image?: string;
}) => {
  return (
    <div
      className={cn(
        'rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] border-transparent justify-between flex flex-col space-y-4',
        className
      )}
    >
      <img src={image} className="w-full h-full object-cover rounded-xl" />
    </div>
  );
};
