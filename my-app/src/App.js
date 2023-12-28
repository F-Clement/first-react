import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFuctional from './components/EventsFuctional';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParents';
import RederingLists from './components/RederingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
    return (
        <div className="App">
            {/* <FunctionalGreetingWithProps greeting="nice to meet you" name="MIke" />
      <StatefulGreeting greeting="I'm a stateful class component" name="John" />
      <StatefulGreetingWithCallback /> */}
            {/* <StatefulGreetingWithPrevState /> */}
            {/* <EventsFuctional />
      <EventsClass /> */}
            {/* <EventBinding /> */}
            {/* <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected={true} /> */}
            {/* <NestingComponents /> */}
            {/* <MethodsAsPropsParent /> */}
            {/* <RederingLists /> */}
            {/* <LifeCyclesCDM /> */}
            {/* <LifeCyclesCDU /> */}
            {/* <LifeCyclesCWU /> */}
            {/* <ControlledForm /> */}
            <UncontrolledForm />
        </div>
    );
}

export default App;
