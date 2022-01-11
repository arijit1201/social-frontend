import { Routes, Route } from "react-router-dom";
import Profile from "../../pages/profile/Profile";

export default function ProfileComponent() {
    return (
        <Routes>
          <Route path=":username" element={<Profile/>} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      )
}
