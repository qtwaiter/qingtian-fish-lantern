import { InkCard, InkTitle, RedSeal, VerticalText } from "@/components/InkComponents";
import { formations, seasons } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowDown, BookOpen, Fish, Map, Shield, X } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F9F7F2] text-foreground overflow-x-hidden font-serif selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <RedSeal text="非遗" className="w-16 h-16 text-lg mx-auto mb-4" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-primary mb-4 drop-shadow-sm"
          >
            青田鱼灯舞
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground tracking-[0.2em] font-light"
          >
            天人合一 · 寓兵于舞 · 活态传承
          </motion.p>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
          <img 
            src="/images/cover_generated.webp" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-multiply"
          />
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 z-10 text-muted-foreground"
        >
          <ArrowDown className="w-8 h-8 opacity-50" />
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl relative group cursor-pointer bg-white"
                 onClick={() => setSelectedImage('/images/cultural_genes_generated.webp')}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <img 
                  src="/images/cultural_genes_generated.webp" 
                  alt="Cultural Genes" 
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display text-3xl mb-2">三重基因</h3>
                <p className="font-serif text-sm opacity-90">稻鱼文化 · 军事智慧 · 民族精神</p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium">点击放大查看</span>
              </div>
            </div>
            {/* Decorative Text */}
            <VerticalText 
              text="郭秉强手记精选" 
              className="absolute -right-12 top-0 text-4xl text-primary/20 h-full hidden md:block" 
            />
          </div>
          
          <div className="md:col-span-7 space-y-8">
            <InkTitle subtitle="Qingtian Fish Lantern Dance" className="items-start">
              源起与内涵
            </InkTitle>
            
            <p className="text-lg leading-loose text-muted-foreground text-justify">
              青田鱼灯舞，这一流传千年的民间艺术瑰宝，不仅是全球重要农业文化遗产"稻鱼共生"系统的艺术再现，更深藏着明代开国元勋刘基（刘伯温）的军事智慧。
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <InkCard className="flex flex-col items-center text-center p-6">
                <Fish className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">自然之美</h4>
                <p className="text-sm text-muted-foreground">模拟鱼类在四季中的生活习性，展现"泛"的游动之美。</p>
              </InkCard>
              
              <InkCard className="flex flex-col items-center text-center p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">军事之智</h4>
                <p className="text-sm text-muted-foreground">融入"一字长蛇"、"十面埋伏"等古代阵法，寓兵于舞。</p>
              </InkCard>
              
              <InkCard className="flex flex-col items-center text-center p-6">
                <BookOpen className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">人文之魂</h4>
                <p className="text-sm text-muted-foreground">寄托"鲤鱼跳龙门"的奋斗精神与"众志成城"的团结力量。</p>
              </InkCard>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons & Formations Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F9F7F2] to-white" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <InkTitle subtitle="The Four Seasons of Formations">四季阵图体系</InkTitle>
          
          <div className="mt-16 space-y-32">
            {seasons.map((season, index) => {
              const seasonFormations = formations.filter(f => f.season === season.id);
              const isEven = index % 2 === 0;
              
              return (
                <div key={season.id} className="relative">
                  {/* Season Header */}
                  <div className="flex items-center justify-center mb-12">
                    <div className="h-[1px] w-24 bg-border" />
                    <div className={cn("mx-6 px-6 py-2 rounded-full border font-display text-2xl", season.color, season.borderColor, season.bgColor)}>
                      {season.name} · {season.title}
                    </div>
                    <div className="h-[1px] w-24 bg-border" />
                  </div>
                  
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16 italic">
                    "{season.description}"
                  </p>

                  {/* Formations Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {seasonFormations.map((formation, fIndex) => (
                      <motion.div
                        key={formation.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: fIndex * 0.2 }}
                        className={cn(
                          "group relative",
                          seasonFormations.length === 1 ? "lg:col-span-2 lg:w-2/3 lg:mx-auto" : ""
                        )}
                      >
                        {/* Image Container */}
                        <div 
                          className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-6 border-4 border-white cursor-pointer bg-white"
                          onClick={() => setSelectedImage(formation.image)}
                        >
                          <img 
                            src={formation.image} 
                            alt={formation.title}
                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <span className="text-white text-sm font-medium">点击放大查看</span>
                          </div>
                          
                          {/* Floating Badge */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold shadow-sm">
                            {formation.title}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4 px-2">
                          <div className="flex items-baseline justify-between border-b border-border pb-2">
                            <h3 className="text-2xl font-bold text-foreground">{formation.title}</h3>
                            <span className="text-sm text-muted-foreground font-serif italic">{formation.subtitle}</span>
                          </div>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {formation.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-secondary/30 p-3 rounded">
                              <span className="text-xs font-bold text-primary block mb-1 uppercase tracking-wider">军事寓意</span>
                              <span className="text-sm">{formation.militaryMeaning}</span>
                            </div>
                            <div className="bg-accent/30 p-3 rounded">
                              <span className="text-xs font-bold text-primary block mb-1 uppercase tracking-wider">文化内涵</span>
                              <span className="text-sm">{formation.culturalMeaning}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F9F7F2] to-white" />
      </section>

      {/* Inheritance Section */}
      <section className="py-24 px-4 md:px-8 max-w-5xl mx-auto text-center">
        <InkTitle subtitle="Inheritance & Future">传承与展望</InkTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
          <div className="text-left space-y-6">
            <h3 className="text-3xl font-display text-foreground">抢救性保护</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              面对"背鱼灯"泛滥与老艺人凋零的危机，郭秉强先生通过手记形式，详细记录了鱼灯舞的技艺精髓与理论体系。
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>拒绝误导，回归"泛"之灵魂</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>建立科学训练体系，将"派"练成本能</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>在尊重传统基础上适度创新</span>
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-3 cursor-pointer"
                 onClick={() => setSelectedImage('/images/inheritance_model_generated.webp')}>
              <img 
                src="/images/inheritance_model_generated.webp" 
                alt="Inheritance" 
                className="w-full h-full object-contain bg-white"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <span className="text-black text-sm font-medium opacity-0 hover:opacity-100">点击放大查看</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs text-left">
              <p className="font-serif italic text-sm text-muted-foreground">
                "只有努力拼搏，民族才能强大。让青田鱼灯这颗明珠瑰宝在中华文化星空中永远闪耀。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-16 px-4 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <RedSeal text="终" className="w-12 h-12 mx-auto mb-8 border-white/20 text-white/80 bg-white/5" />
          <h2 className="font-display text-4xl mb-6">青田鱼灯舞数字图谱</h2>
          <p className="text-white/60 mb-8 font-light">
            基于郭秉强先生手记一、二、三整理制作
          </p>
          <div className="flex justify-center gap-8 text-sm text-white/40">
            <span>© 2024 非遗数字保护计划</span>
            <span>Designed with Ink & Code</span>
          </div>
        </div>
        
        {/* Footer Background */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none">
           <img 
            src="/images/standing_gate_generated.webp" 
            alt="Footer Background" 
            className="w-full h-full object-cover"
          />
        </div>
      </footer>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-pointer"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-white/80 transition-colors p-2"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </motion.button>
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
