import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

// 水墨标题组件
export const InkTitle = ({ children, className, subtitle }: { children: React.ReactNode, className?: string, subtitle?: string }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-8", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-display text-4xl md:text-6xl text-primary mb-2 relative z-10"
      >
        {children}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif text-lg md:text-xl text-muted-foreground italic tracking-widest"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-4 rounded-full" />
    </div>
  );
};

// 水墨卡片组件
export const InkCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative bg-card/80 backdrop-blur-sm border border-border/50 p-6 rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-500",
        className
      )}
    >
      {/* 墨迹背景装饰 */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/30 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

// 红色印章组件
export const RedSeal = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={cn(
      "w-12 h-12 border-2 border-primary rounded-sm flex items-center justify-center bg-primary/5 text-primary font-display text-xs font-bold transform rotate-3 shadow-sm",
      className
    )}>
      <div className="border border-primary/50 w-[90%] h-[90%] flex items-center justify-center">
        {text}
      </div>
    </div>
  );
};

// 垂直文字组件
export const VerticalText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <div className={cn("writing-vertical-rl text-center font-serif tracking-widest leading-loose", className)} style={{ writingMode: 'vertical-rl' }}>
      {text}
    </div>
  );
};
