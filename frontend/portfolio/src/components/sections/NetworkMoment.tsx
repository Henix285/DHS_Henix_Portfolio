import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const nodes = [
  [42, 174], [76, 80], [96, 266], [138, 142], [164, 220], [195, 54],
  [224, 294], [254, 118], [286, 204], [314, 72], [350, 266], [380, 152],
  [414, 44], [448, 234], [478, 114], [514, 292], [546, 184], [574, 62],
  [610, 250], [646, 126], [678, 298], [708, 196], [738, 76], [770, 246],
  [806, 144], [840, 278], [858, 58],
] as const;

const links = nodes.flatMap(([x, y], index) => {
  const nearest = nodes
    .map(([otherX, otherY], otherIndex) => ({
      otherIndex,
      distance: Math.hypot(x - otherX, y - otherY),
    }))
    .filter(({ otherIndex, distance }) => otherIndex > index && distance < 190)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  return nearest.map(({ otherIndex }) => [index, otherIndex] as const);
});

export function NetworkGraphic({ className = "" }: { className?: string }) {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const point = event.currentTarget.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const screenMatrix = event.currentTarget.getScreenCTM();
    if (!screenMatrix) return;
    const { x, y } = point.matrixTransform(screenMatrix.inverse());
    let nearestIndex = -1;
    let nearestDistance = 70;

    nodes.forEach(([nodeX, nodeY], index) => {
      const distance = Math.hypot(x - nodeX, y - nodeY);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });

    setActiveNode(nearestIndex < 0 ? null : nearestIndex);
  };

  return (
    <svg
      viewBox="0 0 900 360"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveNode(null)}
    >
      <g>
        {links.map(([from, to], index) => {
          const isActive = activeNode === from || activeNode === to;
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={nodes[from][0]}
              y1={nodes[from][1]}
              x2={nodes[to][0]}
              y2={nodes[to][1]}
              className={isActive ? "network-link network-link-active" : "network-link"}
              style={{ animationDelay: `${(index % 9) * -0.31}s` }}
              initial={false}
              animate={{ opacity: activeNode === null ? 1 : isActive ? 1 : 0.26 }}
              transition={{ duration: reduceMotion ? 0 : 0.25 }}
            />
          );
        })}
      </g>
      <g>
        {nodes.map(([cx, cy], index) => {
          const isActive = activeNode === index;
          return (
            <motion.circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r={isActive ? 5.5 : index % 5 === 0 ? 4 : 2.6}
              className={isActive ? "network-node network-node-active" : "network-node"}
              initial={false}
              animate={{ opacity: activeNode === null ? [0.55, 1, 0.55] : isActive ? 1 : 0.55 }}
              transition={
                activeNode === null && !reduceMotion
                  ? { duration: 2.4 + (index % 4) * 0.35, repeat: Infinity, delay: (index % 7) * 0.12 }
                  : { duration: reduceMotion ? 0 : 0.2 }
              }
            />
          );
        })}
      </g>
    </svg>
  );
}

export function NetworkMoment() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id="network-moment"
      aria-labelledby="network-moment-title"
      className="editorial-note-section"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: reduceMotion ? 0 : 0.48, ease: "easeOut" }}
    >
      <div className="editorial-note-inner">
        <p className="editorial-note-index">02 <span>/</span> Excited to know</p>
        <div className="editorial-note-copy">
          <h2 id="network-moment-title">
            Good ideas grow <em>when we connect.</em>
          </h2>
          <div className="editorial-note-footer">
            <p>Always ready to learn, collaborate, and build something meaningful.</p>
            <a href="#contact" className="editorial-link">
              Let’s connect <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <NetworkGraphic className="editorial-note-graphic" />
      </div>
    </motion.section>
  );
}
