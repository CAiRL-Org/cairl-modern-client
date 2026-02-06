import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import MobileDropdown from "./MobileDropdown";
import type { MobileMenuProps } from "../../types/header";
import { navigationData } from "../../constants/navigation";

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeDropdown,
  onDropdownToggle,
  onClose,
}) => {
  const handleToggle = (dropdownName: string) => {
    onDropdownToggle(activeDropdown === dropdownName ? "" : dropdownName);
  };


  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background text-foreground shadow-lg"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-primary hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="pt-20 pb-8 px-6 h-[calc(100dvh-80px)] overflow-y-auto">
            <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
              {navigationData.map((item) => (
                <MobileDropdown
                  key={item.label}
                  title={item.label}
                  isOpen={activeDropdown === item.label.toLowerCase()}
                  onToggle={() => handleToggle(item.label.toLowerCase())}
                >
                  {item.links.map((section) => (
                    <div key={section.title}>
                      <h3 className="px-4 py-2 text-sm font-semibold text-foreground/60">{section.title}</h3>
                      {section.links.map((link) => (
                        <Link
                          key={link.href}
                          to={link.href}
                          className="block py-2 px-4 text-foreground/80 hover:text-primary"
                          onClick={onClose}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </MobileDropdown>
              ))}
            </nav>

            <div className="border-t border-border/50 pt-6 mt-6">
              <Link
                to="/contact-us"
                className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                onClick={onClose}
              >
                Contact
              </Link>
              <Link
                to="/engage-with-us"
                className="block mt-4 w-full text-center bg-primary text-primary-foreground rounded-md px-6 py-3 text-lg font-semibold hover:bg-primary/90 transition-all shadow-md"
                onClick={onClose}
              >
                Engage with us
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
