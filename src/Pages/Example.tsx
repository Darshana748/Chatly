// import { useState } from "react";
// import "./App.css";
// import ReactMarkdown from "react-markdown";
// import rehypeHighlight from "rehype-highlight";
// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@heroui/react";

// function App() {
//   const [inputMessage, setInputMessage] = useState("");
//   const [response, setResponse] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<null | string>(null);

//   const handleSubmit = async () => {
//     if (!inputMessage.trim()) {
//       setError("Please enter a message");
//       return;
//     }

//     setIsLoading(true);
//     setError(null);
//     setResponse("");

//     try {
//       const res = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({
//           model: "gpt-4o-mini",
//           messages: [{ role: "user", content: inputMessage }],
//           temperature: 0.7,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error?.message || "API request failed");
//       }

//       setResponse(
//         data.choices?.[0]?.message?.content || "No response generated"
//       );
//     } catch (err) {
//       setError(err.message || "An error occurred");
//       console.error("API Error:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="app-container">
//       <Navbar isBordered isBlurred={false}>
//         <NavbarBrand>
//           <p className="font-bold text-inherit">ACME</p>
//         </NavbarBrand>
//         <NavbarContent className="hidden sm:flex gap-4" justify="center">
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Features
//             </Link>
//           </NavbarItem>
//           <NavbarItem isActive>
//             <Link aria-current="page" href="#">
//               Customers
//             </Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link color="foreground" href="#">
//               Integrations
//             </Link>
//           </NavbarItem>
//         </NavbarContent>
//         <NavbarContent justify="end">
//           <NavbarItem className="hidden lg:flex">
//             <Link href="#">Login</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Button as={Link} color="primary" href="#" variant="flat">
//               Sign Up
//             </Button>
//           </NavbarItem>
//         </NavbarContent>
//       </Navbar>

//       <h1>Chatly</h1>
//       <div className="chat-box">
//         <input
//           type="text"
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
//           placeholder="Type your message..."
//           disabled={isLoading}
//         />
//         <button
//           onClick={handleSubmit}
//           disabled={isLoading}
//           className={isLoading ? "loading" : ""}
//         >
//           {isLoading ? "Thinking..." : "Ask"}
//         </button>
//       </div>

//       {error && <div className="error-message">Error: {error}</div>}
//       {response && (
//         <div className="response-box">
//           <strong>Response:</strong>
//           <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
//             {response}
//           </ReactMarkdown>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
