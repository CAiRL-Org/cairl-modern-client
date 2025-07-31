graph TD
    2     subgraph "Core"
    3         A["App Entry & Global Layout (App.tsx)"]
    4     end
    5 
    6     subgraph "Navigation"
    7         B["React Router"]
    8     end
    9 
   10     subgraph "Content"
   11         C["Pages (e.g., Landing, Podcasts)"]
   12     end
   13 
   14     subgraph "Building Blocks"
   15         D["Feature Components (e.g., EventsTimeline)"]
   16         E["Reusable UI Kit (Button, Card, Input)"]
   17     end
   18 
   19     subgraph "Shared Resources"
   20         F["Shared Logic (Hooks, Utils, Types)"]
   21     end
