import { ScrollArea } from "@/components/ui/scroll-area";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last Updated: September 2024</p>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your information when you use our app ("App").
        By using the App, you agree to the collection and use of information in
        accordance with this policy.
      </p>
      <ScrollArea className="h-[80vh] rounded-md border p-4">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <h3 className="text-lg font-medium mb-2">
              a. Personal Information
            </h3>
            <p>
              The App does not collect any personal information unless
              explicitly provided by you. This may include, but is not limited
              to:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>
                Other information you provide through forms or other
                interactions
              </li>
            </ul>
            <h3 className="text-lg font-medium mb-2 mt-4">b. Usage Data</h3>
            <p>
              We may collect information about how the App is accessed and used
              ("Usage Data"). This data may include:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>Your IP address</li>
              <li>Browser type and version</li>
              <li>The pages of the App that you visit</li>
              <li>The time and date of your visit</li>
              <li>The time spent on those pages</li>
              <li>Unique device identifiers and other diagnostic data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Use of Collected Information
            </h2>
            <p>We may use the collected data for the following purposes:</p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>To provide and maintain the App</li>
              <li>To improve the App and ensure its stability and security</li>
              <li>To monitor usage of the App</li>
              <li>To provide customer support</li>
              <li>To notify you about changes to the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
            <p>
              We take the security of your data seriously and implement
              reasonable security measures to protect it. However, no method of
              transmission over the internet or electronic storage is completely
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Sharing of Data</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties. However, we may disclose your
              data:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>If required by law or to comply with legal obligations</li>
              <li>To protect and defend the rights or property of the App</li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the App
              </li>
              <li>To protect the personal safety of users or the public</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              The App may use cookies and similar tracking technologies to track
              activity and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, some portions
              of the App may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Third-Party Links</h2>
            <p>
              The App may contain links to third-party websites or services that
              are not operated by us. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of
              any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Data from Third-Party Sources
            </h2>
            <p>
              The data displayed in the App, including any data sourced from
              third-party CSV files or databases, is not owned by us. We make no
              claims regarding the ownership, accuracy, or rights to the data.
              By using the App, you acknowledge that the data may be sourced
              from third parties, and we are not responsible for its content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We reserve the right to update or change our Privacy Policy at any
              time. Any changes will be effective immediately upon posting the
              updated Privacy Policy in the App. Your continued use of the App
              after any modifications to the Privacy Policy will constitute your
              acknowledgment of the changes and your consent to abide by the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. Children's Privacy
            </h2>
            <p>
              The App is not intended for use by individuals under the age of 13
              ("Children"). We do not knowingly collect personally identifiable
              information from Children. If we become aware that we have
              collected personal data from a Child without verification of
              parental consent, we will take steps to remove that information
              from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or delete your personal information. If you wish to
              exercise any of these rights, please contact us at OkiOkiXyz [@]
              gmail [dot] com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              how your information is handled, please contact us at OkiOkiXyz
              [@] gmail [dot] com.
            </p>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
