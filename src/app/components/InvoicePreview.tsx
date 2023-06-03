'use client';

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from '@react-pdf/renderer';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function InvoicePreview({
  formData,
}: {
  formData: Record<string, string> | null;
}) {
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return <></>;
}
