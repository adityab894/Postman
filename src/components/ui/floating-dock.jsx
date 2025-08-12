import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import { MoreHorizontal } from "lucide-react";
import { useState, useRef } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobileSlideLeft items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobileSlideLeft = ({ items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-end md:hidden",
        className
      )}
      style={{ paddingTop: "4px" }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-row-reverse gap-3"
          >
            {items.map((item, idx) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{
                  delay: idx * 0.05,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition pt-2 pl-2"
              >
                <div className="h-8 w-8">{item.icon}</div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-transform duration-200 ease-out ml-2"
      >
        <MoreHorizontal
          className="h-10 w-10 font-bold"
          color="black"
          strokeWidth={2.5}
        />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl px-4 pb-3 md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ title, icon, href, mouseX }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const scale = hovered ? 1.25 : 1;

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-50 w-12 h-12"
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-6 left-1/2 w-fit rounded-md px-2 py-0.5 text-xs whitespace-pre text-gray-600"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-center w-14 h-14">{icon}</div>
      </motion.div>
    </a>
  );
}