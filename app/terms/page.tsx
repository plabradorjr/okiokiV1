import { ScrollArea } from "@/components/ui/scroll-area";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
      <p className="mb-4">Last Updated: Septermber 2024</p>
      <ScrollArea className="h-[80vh] rounded-md border p-4">
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using OkiOki, ("App", "OkiOki.xyz",
              "OkiOki.vercel.app"), you agree to comply with and be bound by the
              following Terms of Use. If you do not agree to these terms, you
              should not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Use of the App</h2>
            <p>
              You may use the App for personal or internal educational purposes
              only. You agree not to use the App for any unlawful or prohibited
              purpose, or in any manner that could damage, disable, or impair
              the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Ownership of Data</h2>
            <p>
              The data provided within the App is sourced from external
              databases or files (e.g., CSV files) that are not owned by the
              developer of this App ("We", "Us", or "Our"). By using the App,
              you acknowledge that:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2">
              <li>
                We do not claim ownership of the data provided via the App.
              </li>
              <li>
                The data may be publicly available, open-source, or owned by
                third parties, and is used under the terms specified by the
                respective data owners.
              </li>
              <li>
                You are solely responsible for how you use, interpret, and rely
                upon the data provided through the App.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Accuracy of Information
            </h2>
            <p>
              While we strive to provide accurate and up-to-date information, we
              do not guarantee the accuracy, completeness, or reliability of the
              data accessed through the App. The data may contain errors or
              inaccuracies, and you acknowledge that your use of the data is at
              your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Intellectual Property
            </h2>
            <p>
              The App, including its design, code, and content (excluding
              third-party data), is owned by us and is protected by copyright
              and other intellectual property laws. You may not reproduce,
              distribute, modify, or create derivative works from the App
              without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Third-Party Links and Services
            </h2>
            <p>
              The App may include links to third-party websites or services that
              are not under our control. We are not responsible for the content,
              privacy practices, or terms of use of these third-party sites. You
              acknowledge that your use of any third-party services is governed
              by the terms and conditions of those third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Disclaimer of Warranties
            </h2>
            <p>
              The App is provided "as is" and "as available" without warranties
              of any kind, either express or implied. We do not warrant that the
              App will be uninterrupted or error-free, or that any defects will
              be corrected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Limitation of Liability
            </h2>
            <p>
              In no event shall we be liable for any direct, indirect,
              incidental, special, or consequential damages arising out of your
              use of the App or any data provided through the App, even if we
              have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. Changes to the Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Any
              changes will be effective immediately upon posting the revised
              terms. Your continued use of the App after any such changes
              constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms of Use are governed by and construed in accordance
              with the laws of the State of Illinois, without regard to its
              conflict of law principles. Any disputes arising from these terms
              shall be resolved in the state or federal courts located in
              Chicago, Illinois, and you consent to the jurisdiction and venue
              of such courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              11. Contact Information
            </h2>
            <p>
              If you have any questions or concerns about these Terms of Use,
              please contact us at OkiOkiXyz [@] gmail [dot] com.
            </p>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
}
