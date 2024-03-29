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
import SearchBar from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import HooksCounter from './components/HooksCounter';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';

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
            {/* <UncontrolledForm /> */}
            {/* <SearchBar /> */}
            {/* <ControlledFormHooks /> */}
            {/* <UseStateWithArrays /> */}
            {/* <UseStateWithObjects /> */}
            {/* <HooksCounter /> */}
            {/* <UseEffectCounter /> */}
            {/* <UseEffectCounterContainer /> */}
            {/* <HTTPRequests /> */}
            {/* <HTTPPost /> */}
            <HTTPHooks />
        </div>
    );
}

export default App;
