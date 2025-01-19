Ensure you have followed the correct steps for installing and linking the third-party library according to its documentation.  This may involve running specific commands using react-native link or manually configuring build files for Android (build.gradle) and iOS (Podfile, Xcode project).  

Here's a general approach:

1. **Verify Installation:** Double-check that the library is correctly installed using `npm list` or `yarn list`.
2. **Manual Linking (If Necessary):** If `react-native link` doesn't work, consult the library's documentation for manual linking instructions. This will often involve modifying native Android and iOS project files.
3. **Clean and Rebuild:** After making any changes to native files, always clean and rebuild the project: 
    * **Android:**  `./gradlew clean` followed by rebuilding through Android Studio or the command line.
    * **iOS:**  Clean the build folder in Xcode.
4. **Check for Conflicting Libraries:** Ensure there are no conflicts between different libraries. If you use multiple third-party libraries, conflicts can arise. 
5. **Consult Library Documentation:** Always refer to the library's official documentation for detailed installation and linking instructions.  The specific steps vary from library to library.
6. **Check for Errors in Native Code:** If the problem persists, inspect the native Android (Java or Kotlin) and iOS (Swift or Objective-C) code for errors. These errors might provide valuable clues.