set({ isUpdatingProfile: true });
    // try {
    //   const res = await axiosInstance.put("/auth/update-profile", data);
    //   set({ authUser: res.data });
    //   toast.success("Profile updated successfully");
    // } catch (error) {
    //   console.log("error in update profile:", error);
    //   toast.error(error.response.data.message);
    // } finally {
    //   set({ isUpdatingProfile: false });
    // }