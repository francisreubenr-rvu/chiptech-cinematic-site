/**
 * Signal Nocturne: dark industrial editorial shell with a deliberate, hardware-first rhythm.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import {LiveEvent, Events, Channel} from "./pages/LiveClub";
import ReadingRoom from "./pages/ReadingRoom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Ledger from "./pages/Ledger";
import People from "./pages/People";
import Join from "./pages/Join";
import FieldNotes from "./pages/FieldNotes";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/events/ideathon-4" component={LiveEvent} />
      <Route path="/live-event" component={LiveEvent} />
      <Route path="/events" component={Events} />
      <Route path="/photography" component={FieldNotes} />
      <Route path="/news">{()=> <Channel kind="news"/>}</Route>
      <Route path="/blogs" component={ReadingRoom}/>
      <Route path="/vlogs">{()=> <Channel kind="vlogs"/>}</Route>
      <Route path="/awards">{()=> <Channel kind="awards"/>}</Route>
      <Route path="/leaderboards">{()=> <Channel kind="leaderboards"/>}</Route>
      <Route path="/projects" component={Projects} />
      <Route path="/ledger" component={Ledger} />
      <Route path="/people" component={People} />
      <Route path="/join" component={Join} />
      <Route path="/field-notes" component={FieldNotes} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
