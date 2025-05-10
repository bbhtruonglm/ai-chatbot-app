import Image from 'next/image';
import { motion } from 'framer-motion';

export const Greeting = () => {
  return (
    <div
      key="overview"
      className="max-w-3xl mx-auto gap-5 md:gap-1 size-full flex flex-col justify-center items-center"
    >
      <div className="md:hidden flex">
        <Image
          src="/images/retion-agent.svg"
          alt="Retion Logo"
          width={48}
          height={48}
        />
      </div>
      <div className="max-w-3xl mx-auto gap-1 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.5 }}
          className="text-xl font-medium"
        >
          Chào buổi sáng, Mike.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-zinc-300 font-medium"
        >
          Tôi có thể giúp gì bạn hôm nay?
        </motion.div>
      </div>
    </div>
  );
};
