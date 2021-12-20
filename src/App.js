// import NormalComponent from "./components/NormalComponent";
// import PureComp from "./components/PureComponent";
// import LikesCount from "./components/HOC/LikesCount";
// import CommentCount from "./components/HOC/CommentCount";
// import EnhancedLikes from "./components/HOC/LikesCount";
// import EnhancedComments from "./components/HOC/CommentCount";
// import WithFragment from "./components/Fragments/withFragment";
// import RefDemo from "./components/Ref/RefDemo";
// import ForwordRef from "./components/Ref/ForwordRef";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// import CounterDemo from "./components/ErrorBoundary/CounterDemo";
// import ErrorBoundaryDemo from "./components/ErrorBoundary/ErrorBoundaryDemo";
import UseStateHook from "./components/Hooks/UseStateHook";
import UseReducerHook from "./components/Hooks/UseReducerHook";
import UseEffectsHook from "./components/Hooks/UseEffectsHook";
import './App.css'
import UseRefHook from "./components/Hooks/UseRefHook";
import UseContextHook from "./components/Hooks/UseContextHook";
import Randomfile from "./components/Hooks/randomfile";
import Challenge1 from "./components/CodingChanllenge/Challenge";
import ImageGallery from "./components/CodingChanllenge/ImageGallery";
import Challenge2 from "./components/CodingChanllenge/Challenge2";
import Challenge3 from "./components/CodingChanllenge/Challenge3";
import UseStateHook2 from "./components/AdvancedHooks/UseStateHook2";

function App() {
    return (
        <div>
            <UseStateHook/>
            <UseReducerHook/>
            <UseEffectsHook/>
            <UseRefHook/>
            <UseContextHook/>
            <Challenge1/>
            {/*<ImageGallery/>*/}
            <Challenge2/>
            <Challenge3/>
            <UseStateHook2/>
        </div>
    );
}

export default App;
